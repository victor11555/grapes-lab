import {call, put, takeEvery} from 'redux-saga/effects';
import {addErrorAC} from '../actions/error.actions';
import {ADD_PDF} from "../types";
import {ADD_DPF_URL} from "../../utils/urls";

async function RequestPdf(payload) {
    let response = await fetch(ADD_DPF_URL, {
        method: 'POST',
        headers: {'Content-type': 'Application/json'},
        body: JSON.stringify(payload)
    })
    let blob = await response.blob()
    const newBlob = new Blob([blob]);
    const newUrl = window.URL.createObjectURL(newBlob);

    const link = document.createElement('a');
    link.href = newUrl;
    link.setAttribute('download', 'project.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);

    window.URL.revokeObjectURL(newBlob);
}

function* pdfWorker({payload}) {
yield call(RequestPdf, payload);
}

export function* pdfWatcher() {
    yield takeEvery(ADD_PDF, pdfWorker);
}
