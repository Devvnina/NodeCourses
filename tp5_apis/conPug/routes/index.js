module.exports = (app) => {
   let entries = [];
   app.locals.entries = entries;

   app.get('/',(req, res) => {
      res.render('index', {
         title: 'Indice de Productos'
      });
   });

   app.get('/new-entry',(req, res) => {
      res.render('new-entry', {
         title: 'Nuevo Producto'
      });
   });

   app.post('/new-entry', (req, res) => {
      if (!req.body.title || !req.body.body || !req.body.url) {
         res.send(400).send('Entradas deben tener una descripcion, precion y una Url');
      }

      let newEntry = {
         title: req.body.title,
         content: req.body.body, 
         url: req.body.url,
         published: new Date()

      }
     
      entries.push(newEntry);

      res.redirect('/');
   });
}
