# Employee Front End

## Introduction
You have been hired by a large staffing agency (Coders4Hire) to create an Angular front end for their existing employee database application.  Right now the application holds some basic information on the employee. The current fields that it keeps track of are:
* name
* address
* city
* state
* zip
* phone number
* job title
* date hired

The application they've asked you to develop will access the the REST API that manages requests for information from the database.  

## The Ask...
Coders4Hire would like you to write a user friendly application, using Angular, that will allow a user to enter employee information, and post it to the Employee API (code for the API is available here: https://github.com/gSchool/cognizant-fed-summative4 ).

The form should take all the fields shown above, create a well formed api call using JSON and post it to the employee end point in the API application (above).  After posting the new employee, a page should be displayed that shows a list of all employees in the database.  The listing page should include a link or button that takes the user to the employee entry form.

There is no requirement to apply any type of security to this application.

The formal stories and acceptance criteria are shown below.  

### Story and Acceptance Criteria

```cucumber
As an HR Clerk
I need to be able to fill in a form for a new employee in order to add it to the database 
so that I can maintain a list of employees.

Given an employee's information
When a post call is made to http://localhost:8080/employee/
where the payload includes {name:"Joe Test", address:"123 Any St", city:"Senoia", state:"GA", zip:"30276", phoneNumber:"770-111-2222", jobTitle:"Full Stack Developer", dateHired:"2018-11-16"}
Then I should receive a 200 message, the new employee should be serialized to the database, and I should be presented with a page that lists all employees in the database, including this one.
```

## Notes
* If you feel an acceptance criteria is vague, then please ask the instructor for clarification as XP values human interaction over written requirements.
* Be sure to use test driven design to guide your work. 
* Be sure to commit after each passed test (you are evaluated on the number of commits you make).

## How to submit your work
* Push to your cloned github repository.
* Make a pull request back to the original master.

 
