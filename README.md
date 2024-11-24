# Lottify

Lottie Animation View for React

## Installation

Install through npm:
```
npm i --save lottify
```
or yarn:
```
yarn add lottify
```

## Usage

```jsx
import React from 'react'
import Lottie from 'lottify';

const App: React.FC = () => {
  return (
    <div>
      <Lottie
        path="<path_to_lottie_json>"
        height={400}
        width={400}
      />
    </div>
  )
}

export default App
```
