const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

// Rutas principales
app.get('/', (req, res) => {
  res.render('index', { title: 'Mi Tienda 3D' });
});

// Rutas de productos
app.get('/products', (req, res) => {
  res.render('products/list', { title: 'Productos 3D' });
});
app.get('/products/create', (req, res) => {
  res.render('products/create', { title: 'Crear Producto' });
});
app.get('/products/edit/:id', (req, res) => {
  res.render('products/edit', { title: 'Editar Producto' });
});

// Rutas de usuarios
app.get('/users/register', (req, res) => {
  res.render('users/register', { title: 'Registro' });
});
app.get('/users/login', (req, res) => {
  res.render('users/login', { title: 'Login' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
