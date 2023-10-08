# assigment4
#1.2
You will likely see an error message in the console because this.name inside the printName function no longer refers to the object. It will result in something like "Cannot read property 'name' of undefined" or similar, depending on the JavaScript environment you are using.

To ensure that the printName function retains its context, you can use the .bind()
#1.3
problem in "this" when we call it it lost
we can fix it with using .blind()
