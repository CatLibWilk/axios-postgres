import React from 'react';

const Form = (props) => {
    return (
        <form class={props.width ? `col-${props.width} mx-auto`: 'col-10 mx-auto'}>
            <div class="form-group">
                <label for="formGroupExampleInput">Example label</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Another label</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"></input>
            </div>
        </form>
    )
};

export default Form;