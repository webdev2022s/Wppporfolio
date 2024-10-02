import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {

 /* Indigo */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;
  
  
    
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;


    &, &.light-mode{

         /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;
  
    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;
  
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;
  
    --color-orange-700: #cd4625;
  
    --backdrop-color: rgba(255, 255, 255, 0.1);
  
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  
  
  
    --image-grayscale: 0;
    --image-opacity: 100%;
    }

       
  
}

&.dark-mode{
--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;}


*,
*::before,
*::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.active{
    background-color:red;
}

html{
    font-size: 62.5%;

}


body{
    font-family: "Poppins",sans-serif;
    color:var(--color-grey-700);
    background:linear-gradient(to right, var(--color-grey-300)  , var(--color-grey-700)   );

    line-height: 1.5;

    min-height: 100dvh;
    font-size: 1.6rem;
    transition: color 1s, background-color 2s;



}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

ul{
    list-style: none;
}
.position{
    top: 0;
    position:absolute;
}


.reactIcon{
    grid-column: 3/4;
    border-radius: var(--border-radius-md);
    box-shadow:var(--shadow-lg);

    align-self:center;
    justify-self:center;

    
}
.nextIcon{
    grid-row: 4/-1;
    grid-column: 3/4;
    border-radius: var(--border-radius-md);
    box-shadow:var(--shadow-lg);

    align-self:center;
    justify-self:center;
}
.database{
    grid-column: 3 / 4;
    grid-row: 2 / 4;
    align-self: center;
    justify-self: center;
    align-content: center;
    border-radius: var(--border-radius-md);
    box-shadow:var(--shadow-lg);

}

.sassIcon{
    grid-row: 3 / -1;
    align-self: flex-start;
    grid-column: 1 / 3;
    justify-self: center;
    border-radius: var(--border-radius-md);
    box-shadow:var(--shadow-lg);


}

.cssIcon{
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    align-self: flex-end;
    justify-self: center;
    border-radius: var(--border-radius-md);
    box-shadow:var(--shadow-lg);


}

.nodeIcon{
    grid-column: 4 / -1;
    grid-row: 1 / 3;
    align-self: flex-end;
    justify-self:center;
    border-radius: var(--border-radius-md);
    box-shadow:var(--shadow-lg);


}

.jsIcon{
    grid-column: 4 / -1;
    grid-row: 3 / -1;
    align-self: flex-start;
    justify-self: center;
    border-radius: var(--border-radius-md);
    box-shadow:var(--shadow-lg);

}

`;

export default GlobalStyle;
