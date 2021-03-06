import { put, call } from 'redux-saga/effects';
import { getDashboardData } from '../api/api';
import { dashboardSuccess, dashboardFailure } from 'actions/dashboard';

export function* getDashboardAsync() {
    try {
        const data = yield call(getDashboardData);
        yield put(dashboardSuccess(data));
    } catch (e) {
        yield put(dashboardFailure(e));
    }
}