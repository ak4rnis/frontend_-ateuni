import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../utilities/axios";
import { delayedTimeout } from "../utilities/delayedTimeout";

export const realizarPagoStripe = createAsyncThunk(
    "pagosStripes/realizarPagoStripe",
    async({orden_id}, {rejectWithValue}) => {
        try{
            const requestConfig = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const {data} = await axios.post(`pagostripes/realizar_pago_stripe`, {orden_id}, requestConfig);
            localStorage.setItem("stripeapi", data.stripeApikey);
            await delayedTimeout(1000);
            return data;
        }catch(error)
        {
            return rejectWithValue(error?.response?.data?.message || "Error desconocido");
        }
    }
);