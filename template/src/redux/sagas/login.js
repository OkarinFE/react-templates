import { put, call } from 'redux-saga/effects';
import { getCheckLogin } from '../api/api';
import { loginSuccess, loginFailure } from 'actions/login';

export function* loginAsync(action) {
    try {
        const data = yield call(getCheckLogin, action.payload);
        yield put(loginSuccess(data));
    } catch (e) {
        yield put(loginFailure(e));
    }
}