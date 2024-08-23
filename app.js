const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/school.routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
