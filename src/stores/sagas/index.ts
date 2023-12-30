import {all, fork} from 'redux-saga/effects';

import artworkSagas from './artwork.ts';

export default function* rootSaga() {
  yield all([fork(artworkSagas)]);
}
