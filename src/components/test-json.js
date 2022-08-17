export const testJSON = {
    // {
        logoPosition: "right",
        completedHtml: "<h3>Thank you for completing the test</h3>",
        completedBeforeHtml: "<h3>Our records show that you have already completed this test.</h3>",
        loadingHtml: "<h3>Loading Test...</h3>",
        pages: [
         {
          name: "page1",
          elements: [
           {
            type: "text",
            name: "username",
            title: "What's your name?",
            isRequired: true
           },
           {
            type: "text",
            name: "email",
            title: "What's your email?"
           },
           {
            type: "radiogroup",
            name: "gender",
            title: "What's your gender?",
            isRequired: true,
            choices: [
             {
              value: "female",
              text: "Female"
             },
             {
              value: "male",
              text: "Male"
             },
             {
              value: "other",
              text: "Other"
             }
            ]
           }
          ],
          title: "Personal Details"
         },
         {
          name: "page2",
          elements: [
           {
            type: "imagepicker",
            name: "personality1",
            title: "Select options that best describe you",
            isRequired: true,
            choices: [
             {
              value: "artistic",
              text: "I like working independently",
              imageLink: "https://images.pexels.com/photos/4240571/pexels-photo-4240571.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "enterprising",
              text: "I set goals for myself",
              imageLink: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2V0JTIwZ29hbHN8ZW58MHx8MHx8&auto=format&fit=crop&h=200&q=60"
             },
             {
              value: "investigative",
              text: "Solving puzzles excites me",
              imageLink: "https://images.unsplash.com/photo-1588591795084-1770cb3be374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2V0JTIwZ29hbHN8ZW58MHx8MHx8&auto=format&fit=crop&h=200&q=60"
             },
             {
              value: "social",
              text: "I like working in teams",
              imageLink: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "realistic",
              text: "I like to work on cars",
              imageLink: "https://images.unsplash.com/photo-1534637950656-9e6753b6da6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2V0JTIwZ29hbHN8ZW58MHx8MHx8&auto=format&fit=crop&h=200&q=60"
             },
             {
              value: "conventional",
              text: "I like to organize my things",
              imageLink: "https://images.unsplash.com/photo-1600658747056-eb00845297a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2V0JTIwZ29hbHN8ZW58MHx8MHx8&auto=format&fit=crop&h=200&q=60"
             }
            ],
            choicesOrder: "random",
            imageFit: "cover",
            minImageHeight: 266,
            showLabel: true,
            multiSelect: true
           }
          ],
          title: "Let's Get to Know You Better!"
         },
         {
          name: "page4",
          elements: [
           {
            type: "imagepicker",
            name: "personality2",
            title: "Select options that best describe you",
            choices: [
             {
              value: "investigative",
              text: "I like experiments",
              imageLink: "https://images.pexels.com/photos/8851628/pexels-photo-8851628.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "realistic",
              text: "I like  to build things",
              imageLink: "https://images.unsplash.com/photo-1489850846882-35ef10a4b480?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2V0JTIwZ29hbHN8ZW58MHx8MHx8&auto=format&fit=crop&h=200&q=60"
             },
             {
              value: "enterprising",
              text: "I like to influence/persuade people",
              imageLink: "https://images.pexels.com/photos/6455923/pexels-photo-6455923.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "social",
              text: "I like to teach/train people",
              imageLink: "https://images.pexels.com/photos/1005803/pexels-photo-1005803.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "conventional",
              text: "I like to have instructions to follow",
              imageLink: "https://images.pexels.com/photos/7262741/pexels-photo-7262741.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "artistic",
              text: "I like to read about art & music",
              imageLink: "https://images.pexels.com/photos/4468207/pexels-photo-4468207.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             }
            ],
            choicesOrder: "random",
            imageFit: "cover",
            showLabel: true,
            multiSelect: true
           }
          ],
          title: "Let's Get to Know You Better!"
         },
         {
          name: "page5",
          elements: [
           {
            type: "imagepicker",
            name: "personality3",
            title: "Select options that best describe you",
            choices: [
             {
              value: "investigative",
              text: "I enjoy science",
              imageLink: "https://images.pexels.com/photos/8851628/pexels-photo-8851628.jpeg?cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "artistic",
              text: "I enjoy creative writing",
              imageLink: "https://images.unsplash.com/photo-1550592704-6c76defa9985"
             },
             {
              value: "realistic",
              text: "I like to take care of animals",
              imageLink: "https://images.pexels.com/photos/4639136/pexels-photo-4639136.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "social",
              text: "I like to help people solve their problems",
              imageLink: "https://images.pexels.com/photos/5699419/pexels-photo-5699419.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "conventional",
              text: "I wouldn't mind working 8 hours a day in the office",
              imageLink: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "enterprising",
              text: "I enjoy selling things",
              imageLink: "https://images.pexels.com/photos/7223556/pexels-photo-7223556.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             }
            ],
            choicesOrder: "random",
            imageFit: "cover",
            showLabel: true,
            multiSelect: true
           }
          ],
          title: "Let's Get to Know You Better!"
         },
         {
          name: "page6",
          elements: [
           {
            type: "imagepicker",
            name: "personality4",
            title: "Select options that best describe you",
            choices: [
             {
              value: "realistic",
              text: "I like to assemble things",
              imageLink: "https://images.pexels.com/photos/9242833/pexels-photo-9242833.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "artistic",
              text: "I am a creative person",
              imageLink: "https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "enterprising",
              text: "I am quick to take on new responsibilities",
              imageLink: "https://images.pexels.com/photos/4559736/pexels-photo-4559736.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "social",
              text: "I am interested in healing people",
              imageLink: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0"
             },
             {
              value: "investigative",
              text: "I am interested in figuring out how things work",
              imageLink: "https://images.pexels.com/photos/5063444/pexels-photo-5063444.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             },
             {
              value: "conventional",
              text: "I pay attention to details",
              imageLink: "https://images.pexels.com/photos/247781/pexels-photo-247781.jpeg?auto=compress&cs=tinysrgb&w=400inysrgb&h=200"
             }
            ],
            choicesOrder: "random",
            imageFit: "cover",
            showLabel: true,
            multiSelect: true
           }
          ],
          title: "Let's Get to Know You Better!"
         },
         {
          name: "page7",
          elements: [
           {
            type: "imagepicker",
            name: "personality5",
            title: "Select options that best describe you",
            choices: [
             {
              value: "enterprising",
              text: "I would like to start my own business",
              imageLink: "https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             },
             {
              value: "social",
              text: "I love learning about culture",
              imageLink: "https://images.pexels.com/photos/6191880/pexels-photo-6191880.jpeg?auto=compress&cs=tinysrgb&h=200"
             },
             {
              value: "realistic",
              text: "I like to cook",
              imageLink: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             },
             {
              value: "investigative",
              text: "I like to analyze things",
              imageLink: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=200&q=80"
             },
             {
              value: "artistic",
              text: "I like to play instruments or sing",
              imageLink: "https://images.pexels.com/photos/6843304/pexels-photo-6843304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             },
             {
              value: "conventional",
              text: "I like to do filing/typingpay attention to details",
              imageLink: "https://images.pexels.com/photos/5076520/pexels-photo-5076520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             }
            ],
            choicesOrder: "random",
            imageFit: "cover",
            showLabel: true,
            multiSelect: true
           }
          ],
          title: "Let's Get to Know You Better!"
         },
         {
          name: "page8",
          elements: [
           {
            type: "imagepicker",
            name: "personality6",
            title: "Select options that best describe you",
            choices: [
             {
              value: "artistic",
              text: "I like acting in plays",
              imageLink: "https://images.pexels.com/photos/1049746/pexels-photo-1049746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             },
             {
              value: "conventional",
              text: "I am good at keeping records of my work",
              imageLink: "https://images.unsplash.com/photo-1542728143-d9b537db6433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=200&q=80"
             },
             {
              value: "realistic",
              text: "I am a practical person",
              imageLink: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             },
             {
              value: "social",
              text: "I like to get into discussions",
              imageLink: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             },
             {
              value: "investigative",
              text: "I like working with charts/numbers",
              imageLink: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             },
             {
              value: "enterprising",
              text: "I like to lead others",
              imageLink: "https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             }
            ],
            choicesOrder: "random",
            imageFit: "cover",
            showLabel: true,
            multiSelect: true
           }
          ],
          title: "Let's Get to Know You Better!"
         },
         {
          name: "page9",
          elements: [
           {
            type: "imagepicker",
            name: "personality7",
            title: "Select options that best describe you",
            choices: [
             {
              value: "artistic",
              text: "I like to draw",
              imageLink: "https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&h=200"
             },
             {
              value: "realistic",
              text: "I like working outdoors",
              imageLink: "https://images.pexels.com/photos/8829883/pexels-photo-8829883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             },
             {
              value: "social",
              text: "I like helping people",
              imageLink: "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=200&q=80"
             },
             {
              value: "enterprising",
              text: "I like to give speeches",
              imageLink: "https://images.pexels.com/photos/8345977/pexels-photo-8345977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             },
             {
              value: "investigative",
              text: "I am good at maths",
              imageLink: "https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=200&q=80"
             },
             {
              value: "conventional",
              text: "I like to work in an office",
              imageLink: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=1"
             }
            ],
            choicesOrder: "random",
            imageFit: "cover",
            showLabel: true,
            multiSelect: true
           }
          ],
          title: "Let's Get to Know You Better!"
         },
         {
          name: "page3",
          elements: [
           {
            type: "radiogroup",
            name: "class",
            title: "What is your main class in school?",
            choices: [
             {
              value: "science",
              text: "Science"
             },
             {
              value: "arts",
              text: "Arts"
             },
             {
              value: "commercial",
              text: "Commercial"
             }
            ]
           }
          ],
          title: "Your Class Option"
         },
         {
          name: "page10",
          elements: [
           {
            type: "matrix",
            name: "scienceResult",
            visibleIf: "{class} = 'science'",
            title: "How good are you in each of the following subjects?",
            columns: [
             {
              value: "A",
              text: "Excellent"
             },
             {
              value: "B",
              text: "Very Good"
             },
             {
              value: "C",
              text: "Good"
             },
             {
              value: "D",
              text: "Average"
             },
             {
              value: "E",
              text: "Fair"
             }
            ],
            rows: [
             {
              value: "mth",
              text: "Maths"
             },
             {
              value: "eng",
              text: "English"
             },
             {
              value: "bio",
              text: "Biology"
             },
             {
              value: "chm",
              text: "Chemistry"
             },
             {
              value: "phy",
              text: "Physics"
             },
             {
              value: "agr",
              text: "Agric"
             },
             {
              value: "fmt",
              text: "F/Maths"
             },
             {
              value: "fnt",
              text: "Food & Nut"
             },
             {
              value: "ecn",
              text: "Economics"
             },
             {
              value: "csc",
              text: "Computer Science"
             },
             {
              value: "ted",
              text: "Technical Drawing"
             },
             {
              value: "mus",
              text: "Music"
             }
            ]
           },
           {
            type: "matrix",
            name: "artsResult",
            visibleIf: "{class} = 'arts'",
            title: "How good are you in each of the following subjects?",
            columns: [
             {
              value: "A",
              text: "Excellent"
             },
             {
              value: "B",
              text: "Very Good"
             },
             {
              value: "C",
              text: "Good"
             },
             {
              value: "D",
              text: "Average"
             },
             {
              value: "E",
              text: "Fair"
             }
            ],
            rows: [
             {
              value: "mth",
              text: "Maths"
             },
             {
              value: "eng",
              text: "English"
             },
             {
              value: "lit",
              text: "Literature"
             },
             {
              value: "gov",
              text: "Government"
             },
             {
              value: "his",
              text: "History"
             },
             {
              value: "ngl",
              text: "Languages"
             },
             {
              value: "csc",
              text: "Computer Science"
             },
             {
              value: "mus",
              text: "Music"
             }
            ]
           },
           {
            type: "matrix",
            name: "commercialResult",
            visibleIf: "{class} = 'commercial'",
            title: "How good are you in each of the following subjects?",
            columns: [
             {
              value: "A",
              text: "Excellent"
             },
             {
              value: "B",
              text: "Very Good"
             },
             {
              value: "C",
              text: "Good"
             },
             {
              value: "D",
              text: "Average"
             },
             {
              value: "E",
              text: "Fair"
             }
            ],
            rows: [
             {
              value: "mth",
              text: "Maths"
             },
             {
              value: "eng",
              text: "English"
             },
             {
              value: "acc",
              text: "Accounting"
             },
             {
              value: "com",
              text: "Commerce"
             },
             {
              value: "ecn",
              text: "Economics"
             },
             {
              value: "gov",
              text: "Government"
             },
             {
              value: "fmt",
              text: "F/Maths"
             },
             {
              value: "csc",
              text: "Computer Science"
             },
             {
              value: "mus",
              text: "Music"
             }
            ]
           }
          ],
          title: "Your School Results"
         }
        ],
        showCompletedPage: false,
        navigateToUrl: "http://localhost:3000/result",
        showProgressBar: "top",
        completeText: "Submit",
        widthMode: "responsive"
    //    }
};
