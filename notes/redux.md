Redux is a Library used for state management it is *NOT* exclusive to React

** ONE WAY DATA FLOW **

Redux is used when state starts to become more complicated - Multiple components sharing state and passing state to different levels of the code


Redux was designed with the same design pattern as modern databases to try and resolve similar issues that databases where having with and front end projects were having with managing state

Redux ( State ) The Principals: {

    -- Single source of truth ( One single big object that describes the state of everything in the project )

    -- State is read only ( Encourages immutability )

    -- Changes using pure functions ( A pure function is something that receives an input and always returns an output that is predictable )


}



Redux Flow ( Flux Pattern ) {

    Action : something a user does ( clicks on a button or a drop down menu )

    Root Reducer: simply a pure function that receives an input and produces an output

    Store: Holds all state for the app

    Dom Changes: DOM changes based off the state changes

}

Redux and native state ( State management with React itself ) can be used together

Drilling props from the parent down to the children is NOT good practice since the child is the only one that needs the prop. That is a common issue with native state in React and Redux can resolve that