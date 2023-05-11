let loadingHandler = { startLoading: () => {}, closeLoading: () => {} };
export function setLoadingHandler({ startLoading, closeLoading }) {
  loadingHandler = { startLoading, closeLoading };
}

export const loadingProcess = (logic) => {
  loadingHandler.startLoading();
  const start = Date.now();
  new Promise((resolve) => {
    resolve(logic());
  }).finally(() => {
    const diff = Date.now() - start;
    setTimeout(
      () => {
        loadingHandler.closeLoading();
      },
      diff < 1000 - diff ? 1000 : 0
    );
  });
};
