export default async ({ app, store }) => {
  app.router.afterEach((to, from) => {
    store.dispath('closeGuide');
  })
}
