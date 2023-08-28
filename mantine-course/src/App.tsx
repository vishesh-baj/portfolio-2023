import { Button, Text, Paper, Loader } from "@mantine/core";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <div>
      <div>
        <MantineProvider
          theme={{
            fontFamily: "Open Sans",
            colorScheme: "dark",
            fontSizes: {
              md: "12",
            },
            radius: {
              sm: "232",
            },
          }}
        >
          <Paper>
            <Text>I am a text component</Text>
            <Text>I am a text tag</Text>
          </Paper>
          <Button size="xl" color="cyan">
            Button
          </Button>
          <Button size="xl" color="cyan">
            Button
          </Button>
          <Loader />
        </MantineProvider>
      </div>
    </div>
  );
};

export default App;
