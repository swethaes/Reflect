import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../../App.css'; // Import the CSS file

function Report() {
    const navigate = useNavigate();

    const start1 = () => {
      navigate('/DailyRoutine');
    };
    return (
        <div>
            <div className="header-container">
                <img src="videos\assets\logo_edited_edited.png" alt="Logo" className="logo" />
                <h1>REFLECT</h1>
            </div>
            <div className="justify-content-center">
                <div>
                    <div className="heading">
                        <h1 className="question-title">
                            Analysis Report
                        </h1>
                    </div>
                    <div className="card">
                        <>
                            <h2 className="question-title">1. Social Interaction Analysis</h2>
                            <pre>
                                {`
Introduction:
This report presents the findings of the assessment conducted.

Participant Information:

Child's Name: John
Age: 8
Gender: Male
Date of Assessment: 17-04-2024
Assessment Setting: School
Referring Party: Dr. Patel, Child Psychiatrist
Presenting Concerns: John exhibits difficulties in social interaction and communication skills.
Assessment Details:
The assessment was conducted using standardized tools.

Observations and Findings:

During the assessment, John exhibited behaviors consistent with ASD.

Standardized assessments yielded the following scores:

ADOS-2 Total Score: 20 (indicating moderate to severe ASD symptoms)
CARS-2 Total Score: 30 (indicating significant autism-related concerns)
Based on these observations and scores, John demonstrates challenges in social 
communication and interaction, as well as repetitive behaviors.

Diagnostic Impressions:

It is the clinical opinion of the assessing psychologist that John meets the 
criteria for Autism Spectrum Disorder.

Recommendations:

Early Intervention Services: John should be referred to early intervention 
programs to address his specific needs.
Educational Support: A comprehensive individualized education plan 
(IEP) should be developed to support John's learning and social development.

Parent/Caregiver Training: Parents and caregivers should receive training on 
strategies to support John's communication and social skills at home.
Community Resources: Information about local support groups and therapy services 
should be provided to the family.

Conclusion:

In conclusion, the assessment findings indicate that John presents with significant 
challenges consistent with Autism Spectrum Disorder.

References:

American Psychiatric Association. (2013). Diagnostic and statistical manual of mental disorders.
Appendices:

[Appendix A: Raw scores from standardized assessments]
[Appendix B: Parent/Caregiver Questionnaires]
Authorization and Signature:
I hereby authorize the sharing of this assessment report.

Signature: ____________________
Date: ________________________

This report is confidential and intended solely.
                                `}
                            </pre>
                            <div className="button-container">
                                {/* Uncomment this button if needed */}
                                {/* <button onClick={start1}>Click here to start!</button> */}
                            </div>
                        </>
                    </div>
                    <div className="card">
            <>
              <div className="button-container" >
                <button onClick={start1}>View your tasks!</button> {/* Removed curly braces around start1 */}
              </div>
            </>
          </div>
                </div>
            </div>
        </div>
    );
}

export default Report;
