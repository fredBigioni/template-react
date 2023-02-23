import { Navigate, Route, Routes } from "react-router-dom"
import { LayoutApp } from "../layout/LayoutApp";
import { TaskView, Settings, Home, UserView } from "../views";

export const AppRoutes = () => {
    return (
        <>
            <LayoutApp>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Navigate to='/tracker/Home' />} />
                        <Route path="/tracker" element={<Navigate to='/tracker/Home' />} />
                        <Route path="/*" element={<h1>Error 404 Not Found...</h1>} />
                        <Route path="/tracker">
                            <Route path="home" element={<Home />} />
                            <Route path="task" element={<TaskView />} />
                            <Route path="settings" element={<Settings />} />
                            <Route path="user" element={<UserView />} />
                        </Route>
                    </Routes>
                </div>
            </LayoutApp>
        </>
    )
}
