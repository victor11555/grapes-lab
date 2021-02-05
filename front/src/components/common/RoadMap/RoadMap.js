import React, { useEffect } from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { useSelector } from 'react-redux';

function RoadMap(props) {
  const step1Content = <h1>Step 1 Content</h1>;
  const step2Content = <h1>Step 2 Content</h1>;
  const step3Content = <h1>Step 3 Content</h1>;
  const step4Content = <h1>Step 4 Content</h1>;
  const step5Content = <h1>Step 5 Content</h1>;

    const user = useSelector(state => state.user);
  useEffect(() => {
    const prev = document.getElementsByClassName('_3CDiP');
    const next = document.getElementsByClassName('_hsN1w');
    if (user.role !== 'Admin') {
      prev[0].style.display = 'none';
      next[0].style.display = 'none';
    }
  }, []);
  // previous.style.display = 'none'
  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {

  }

  function step3Validator() {
    // return a boolean
  }

  function step4Validator() {
    // return a boolean
  }

  function step5Validator() {
    // return a boolean
  }

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  const projects = useSelector(state => state.user.project);
  return (
    <div>
      <StepProgressBar
        startingStep={3}// what now
        onSubmit={onFormSubmit}
        steps={[
          {
            label: 'Step 1',
            subtitle: '20%',
            name: 'step 1',
            content: step1Content,
          },
          {
            label: 'Step 2',
            subtitle: '40%',
            name: 'step 2',
            content: step2Content,
            validator: step2Validator,
          },
          {
            label: 'Step 3',
            subtitle: '60%',
            name: 'step 3',
            content: step3Content,
            validator: step3Validator,
          },
          {
            label: 'Step 4',
            subtitle: '80%',
            name: 'step 4',
            content: step4Content,
            validator: step4Validator,
          },
          {
            label: 'Step 5',
            subtitle: '100%',
            name: 'step 5',
            content: step5Content,
            validator: step5Validator,
          },
        ]}
      />
    </div>
  );
}

export default RoadMap;
