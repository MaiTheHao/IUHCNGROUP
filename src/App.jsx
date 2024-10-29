import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Auth";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

const AppPages = [
	{ id: "trang-chu", name: "Trang chủ", path: "/trang-chu", element: <Home /> },
	{ id: "bieu-mau", name: "Biểu mẫu", path: "/bieu-mau", element: null },
];

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Auth />}>
					<Route path="*" element={<Navigate to="trang-chu" />} />
					{AppPages.map((page, index) => (
						<Route key={index} path={page.path} element={<Layout>{page.element}</Layout>} />
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export { AppPages };
export default App;
