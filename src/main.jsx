import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import AppContextProvider from "./context/AppContextProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	</StrictMode>
);