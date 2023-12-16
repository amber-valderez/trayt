import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/joy";
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID,
  experimental_extendTheme as extendMaterialTheme,
} from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useAtom } from "jotai/react";
import { useState } from "react";
import { directDepositAtom } from "../core/store";
import { DirectDepositFrequency } from "../enums";

const materialTheme = extendMaterialTheme();

const calculateAmount = (
  rate: number,
  months: number,
  monthlyInstallment: number,
) => {
  return (monthlyInstallment * ((1 + rate) ** months - 1)) / rate;
  // let r = (0.05/12); 1000 * ((((1 + r) ** (12)) - 1) / (r))
};
export const Component = function CompoundInterestCalculator(): JSX.Element {
  const todayJs = dayjs(new Date().toLocaleDateString());
  const [directDepositData] = useAtom(directDepositAtom);
  const [date, setDate] = useState<Dayjs>(todayJs);

  const frequencyString =
    directDepositData.frequency === DirectDepositFrequency.OncePerMonth
      ? "Once"
      : "Twice";

  function handleChange(value: Dayjs | null): void {
    setDate(value || todayJs);
  }

  const deltaMonths = date.diff(todayJs, "month");

  const monthlyInstallment =
    directDepositData.amount * directDepositData.frequency;
  const specialRate = 0.05 / 12;
  const defaultRate = 0.02 / 12;
  const n = deltaMonths;
  let amount = 0;
  if (n > 0) {
    amount = calculateAmount(specialRate, Math.min(n, 36), monthlyInstallment);
    if (n > 36) {
      amount += calculateAmount(defaultRate, n - 36, monthlyInstallment);
    }
  }

  return (
    // <Container sx={{ mt: 10, py: 2 }}>
    <Stack
      direction="column"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      marginTop={10}
      spacing={4}
    >
      <Typography sx={{ mb: 4, textAlign: "center" }} level="h2">
        Compound Interest Calculator
      </Typography>
      <AccordionGroup>
        <Accordion sx={{ maxWidth: "320px" }}>
          <AccordionSummary
            sx={{
              width: "320px",
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            Details
          </AccordionSummary>
          <AccordionDetails
            sx={{
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.15)",
              borderRadius: "0px 0px 16px 16px",
            }}
          >
            <Typography>
              Monthly Amount:{" "}
              {monthlyInstallment.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
              <Box mb={1} />
              Frequency: {`${frequencyString} per Month`}
              <Box mb={1} />
              5% for 36 months, 2% thereafter
            </Typography>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>

      <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            sx={{
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.15)",
              borderRadius: "16px",
            }}
            defaultValue={todayJs}
            value={date}
            minDate={todayJs}
            onChange={handleChange}
          />
        </LocalizationProvider>
      </MaterialCssVarsProvider>
      <Typography
        className="test"
        sx={{ mt: 4, textAlign: "center" }}
        level="h1"
      >
        {amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </Typography>
    </Stack>
  );
};
