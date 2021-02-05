import {call, put, takeEvery} from 'redux-saga/effects';
import {addErrorAC} from '../actions/error.actions';
import {ADD_PDF} from "../types";
import {ADD_DPF_URL} from "../../utils/urls";

async function RequestPdf(payload) {
    await fetch(ADD_DPF_URL, {
        method: 'POST',
        headers: {'Content-type': 'Application/json'},
        body: JSON.stringify(payload)
    })
}

function* pdfWorker({payload}) {
yield call(RequestPdf, payload);
}

export function* pdfWatcher() {
    yield takeEvery(ADD_PDF, pdfWorker);
}