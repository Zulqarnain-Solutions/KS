import { useState } from "react";

export function useValidate(inputData, validatConfiq) {
    const [errors, setErrors] = useState({});

     function validate() {
        const errorsData = {};

        Object.entries(inputData).forEach(([key, value]) => {
        validatConfiq[key].some((rule) => {
            if (rule.required && !value) {
            // console.log("Enter data")
            errorsData[key] = rule.errorMessage;
            return true;
            }

            if (rule.minLength && value.length < rule.minLength) {
            console.log(rule.errorMessage);
            errorsData[key] = rule.errorMessage;
            return true;
            }
        });
        });
        setErrors(errorsData);
        return errorsData;
  }

    return [errors, validate, setErrors];
}