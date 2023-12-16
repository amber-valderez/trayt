/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
  Stack,
  Tooltip,
  Typography,
} from "@mui/joy";
import { debounce } from "@mui/material";
import { useAtom } from "jotai";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { router } from ".";
import { usePageEffect } from "../core/page";
import { directDepositAtom } from "../core/store";
import { DirectDepositFrequency } from "../enums";

interface FormData {
  [key: string]: string | number | DirectDepositFrequency;
}

export const Component = (): JSX.Element => {
  usePageEffect({ title: "Splash" });
  const defaultFrequency = DirectDepositFrequency.OncePerMonth;
  const initialFormData: FormData = {
    accountNumber: "",
    routingNumber: "",
    amount: "",
    frequency: defaultFrequency,
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({
    accountNumber: false,
    routingNumber: false,
    amount: false,
  });

  const [directDepositData, setDirectDepositData] = useAtom(directDepositAtom);

  // Routing numbers are a series of 9 Whole Numbers.
  // The first two digits of a routing number must be in the ranges:
  // 00 through 12
  // 21 through 32
  // 61 through 72
  // or 80
  const validateRoutingNumber = (routingNumber: string) => {
    const digits = routingNumber.split("").map((d) => parseInt(d, 10));
    let isValid = false;
    if (digits.length == 9) {
      const firstDigit: number = digits[0];
      const secondDigit: number = digits[1];

      const twoDigits = firstDigit * 10 + secondDigit;

      isValid =
        (twoDigits >= 0 && twoDigits <= 12) ||
        (twoDigits >= 21 && twoDigits <= 32) ||
        (twoDigits >= 61 && twoDigits <= 72) ||
        twoDigits === 80;
    }
    return isValid;
  };

  const _handleChange = (
    name: string,
    value: string | DirectDepositFrequency,
  ) => {
    handleValidation(name, value);
    if (name === "amount" && typeof value === "string") {
      value = value.replace("$", "");
      value = value.replace("-", "");
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    e.preventDefault();
    _handleChange(name, value);
  };

  const handleSelectChange = (
    e: React.SyntheticEvent | null,
    newValue: DirectDepositFrequency | null,
  ) => {
    const name = "frequency";
    const value = newValue ?? "weekly";
    _handleChange(name, value);
  };

  const handleValidation = useMemo(
    () =>
      debounce((name, value) => {
        // Reset validation error for the current field
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: false,
        }));

        if (name === "accountNumber") {
          const isValidAccountNumber = value.length >= 8 && value.length <= 17;
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: !isValidAccountNumber,
          }));
        } else if (name === "routingNumber") {
          const isValidRoutingNumber = validateRoutingNumber(value);
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: !isValidRoutingNumber,
          }));
        } else if (name === "amount") {
          const isValidAmount = !isNaN(+value) && value.length > 0;
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: !isValidAmount,
          }));
        }
      }, 500),
    [],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors: { [key: string]: boolean } = {};
    Object.keys(formData)
      .filter((fd) => fd !== "frequency")
      .forEach((key) => {
        if (!formData[key]) {
          validationErrors[key] = true;
        }
      });

    // If there are validation errors, set the errors and prevent submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...validationErrors,
      }));
      return;
    }
    // TODO: Fix error
    setDirectDepositData({
      amount: +formData.amount,
      frequency: formData.frequency as DirectDepositFrequency,
    });

    // Form is valid, handle form submission logic
    router.navigate("/compound-interest-calculator");
  };

  const isSubmitDisabled = Object.values(errors).some((error) => error);
  const hasError =
    isSubmitDisabled ||
    !formData.accountNumber ||
    !formData.routingNumber ||
    !formData.amount;

  return (
    <div>
      <Box mb={16}></Box>
      <Typography sx={{ mb: 2, textAlign: "center" }} level="h2">
        New Direct Deposit Enrollment
      </Typography>
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: "#F3F3F3",
          borderRadius: "5px",
          padding: "40px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack
            direction="column"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            spacing={2}
          >
            <FormControl>
              <FormLabel htmlFor="accountNumber">Account Number:</FormLabel>
              <Input
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                error={errors.accountNumber}
                style={{ width: "400px" }}
              />
              {errors.accountNumber && (
                <Typography variant="plain" color="danger">
                  Account number must be between 8 and 17 numbers.
                </Typography>
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="routingNumber">Routing Number:</FormLabel>
              <Input
                id="routingNumber"
                name="routingNumber"
                value={formData.routingNumber}
                onChange={handleChange}
                error={errors.routingNumber}
                type="number"
                style={{ width: "400px" }}
              />
              {errors.routingNumber && (
                <Typography variant="plain" color="danger">
                  Must enter a valid routing number.
                </Typography>
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="amount">Amount:</FormLabel>
              <Input
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                type="number"
                startDecorator="$"
                slotProps={{
                  input: {
                    min: 0,
                  },
                }}
                style={{ width: "400px" }}
              />
              {errors.amount && (
                <Typography variant="plain" color="danger">
                  Must enter a valid amount.
                </Typography>
              )}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="frequency">Frequency:</FormLabel>
              <Select
                id="frequency"
                name="frequency"
                defaultValue={defaultFrequency}
                onChange={handleSelectChange}
                placeholder="Frequency"
                style={{ width: "400px" }}
              >
                <Option value={DirectDepositFrequency.OncePerMonth}>
                  One per Month
                </Option>
                <Option value={DirectDepositFrequency.TwicePerMonth}>
                  Twice per Month
                </Option>
              </Select>
            </FormControl>
            <Tooltip title={hasError ? "Fill out the form to proceed" : ""}>
              <span>
                <Button
                  type="submit"
                  color="primary"
                  disabled={hasError}
                  style={{ width: "115px" }}
                >
                  Submit
                </Button>
              </span>
            </Tooltip>
          </Stack>
        </form>
      </Container>
    </div>
  );
};
