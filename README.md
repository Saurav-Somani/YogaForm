# YogaForm

This a simple yoga application service. It uses React for frontend and nodejs for backend and MySQL as database.

Application form collects basic information like name,age,mobile numerb,address and the class timing which he/she wants to attend. The entered data is then sent to the backend through API, where rest of the processing is done.

The backend is deployed on google cloud as Netlify does not support MySQL.

The database has 2 tables, one is userData which stores all the information of the user. In this, mobile number is the primary key and the batch is a foreign key which refers to the another table which is classDetails which stores the ClassID and the timings of the class. Before entering the details into the userData, I'm verifying if the user has already paid the fees or not ans dependingly I'm showing the result. If the user haven't paid the fees than the payment function is called. Also as soon as the payment get done, a entry is made into the paymentDetails table of the database, which has not been implemented as the payemtn function was not to be implemented.

Assumptions: For every month, a user has to fill the form and pay the fees. After every month, all the entry of the userDetails table get deleted. Each month get over on the last day of the month and user will pay the whole amount and hos/her admission will have to be renewed every month.
