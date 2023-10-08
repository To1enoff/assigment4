# assigment4
# 1.1
The findManagerHierarchy function takes the employees array and the employeeId as input.

Inside the function, we initialize an empty array managerHierarchy to store the manager IDs in the hierarchy.

We define an inner recursive function findManagers that takes the current employee's ID as an argument.

Inside findManagers, we use find to search for the employee with the given employeeId.

If the employee exists, we push their employeeId into the managerHierarchy array and check if their managerId is not equal to their own employeeId (to avoid infinite loops).

If the managerId is different, we call findManagers recursively with the managerId to continue traversing the hierarchy.

Finally, we call findManagers with the provided employeeId to start the hierarchy traversal and return the managerHierarchy.
# 1.2
You will likely see an error message in the console because this.name inside the printName function no longer refers to the object. It will result in something like "Cannot read property 'name' of undefined" or similar, depending on the JavaScript environment you are using.

To ensure that the printName function retains its context, you can use the .bind()

# 1.3
problem in "this" when we call it it lost
we can fix it with using .blind()

# explaining of 1.4, 1.5, 1.6 is in txt file in part2 folder
