import React, {ChangeEvent} from 'react';
import { Checkbox } from "@mui/material";

type StateType = {
    checked: boolean
    callback: (newIsDoneValue: boolean) => void

}
export const CheckboxUniversal = (props: StateType) => {
    const onChangeHandlers = (e: ChangeEvent<HTMLInputElement>) => {
      props.callback(e.currentTarget.checked)
    }
    return (
        <Checkbox
            checked={props.checked}
            color="primary"
            onChange={onChangeHandlers}
        />
    );
};

