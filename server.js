const express = require('express');
const morgan = require('morgan');

const blogRouter = require('./blogRouter.js');
const app = express();

app.use(morgan('common'));

app.use('/blog-posts', blogRouter);

app.listen(process.env.PORT || 2121, () => {
	console.log(`Your app is listening on port ${process.env.PORT || 2121}`);
});