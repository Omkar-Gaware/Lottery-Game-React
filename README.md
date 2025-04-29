# Lottery Game React Application

A simple, interactive lottery game built with React where users can generate random ticket numbers and win if they match a specific sum.

![Screenshot 2025-04-29 121244](https://github.com/user-attachments/assets/6f7f7798-21dc-4303-9cb0-695094d0c473)

## Features

- Randomly generated lottery tickets
- Interactive UI with modern design
- Winning condition based on sum of ticket numbers
- Responsive design for various screen sizes

## Demo

[View Live Demo](#) (Add your demo link when available)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lottery-game.git
   cd lottery-game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. The app will generate a random ticket with numbers when it loads
2. Click the "Buy New Ticket" button to generate a new ticket
3. If the sum of your ticket numbers equals the winning number, you'll see a congratulatory message


## How It Works

1. The `Lottery` component is the main container that manages the state of the ticket
2. The `genTicket(n)` function in `helper.js` generates an array of n random digits (0-9)
3. The `sum(arr)` function calculates the sum of the ticket numbers
4. If the sum matches the winning number (passed as a prop to the Lottery component), the player wins
5. The UI updates to show a congratulatory message when the player wins

## Customization

You can customize the lottery game by modifying the following props when using the Lottery component:

- `n`: Number of digits in each ticket (default: 3)
- `winNum`: The sum that results in a win (default: depends on your implementation)

Example usage in a parent component:

```jsx
import Lottery from './components/Lottery';

function App() {
  return (
    <div className="App">
      <Lottery n={3} winNum={15} />
    </div>
  );
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

