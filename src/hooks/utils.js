/* eslint-disable default-case */

import produce from 'immer';

const status = {
  success: 'success',
  fetching: 'fetching',
  error: 'error',
  idle: 'idle',
};

const actions = {
  INIT: 'INIT',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  CLEAN: 'CLEAN',
};

const initState = {
  data: {},
  status: status.idle,
};

const reducer = produce((draft, { type, payload }) => {
  switch (type) {
    case actions.INIT:
      draft.status = status.fetching;
      return;
    case actions.SUCCESS:
      draft.status = status.success;
      draft.data = payload;
      return;
    case actions.FAILED:
      draft.status = status.error;
      return;
    case actions.CLEAN:
      return initState;
  }
});

export { actions, status, reducer, initState };
