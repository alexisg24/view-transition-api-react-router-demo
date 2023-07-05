export const useRedirect = (navigate, path) => {
  if (!document.startViewTransition) {
    return navigate(path)
  } else {
    return document.startViewTransition(() => {
      navigate(path)
    })
  }
}
