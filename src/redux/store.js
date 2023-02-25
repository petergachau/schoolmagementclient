import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import projectReducer from "./features/projectSlice";
import complainReducer from "./features/complain"
import vacationReducer from "./features/complain"
import tenantReducer from './features/TenantSlice'
import milestoneReducer from './features/caretaker'
import noticeReducer from './features/caretaker'
import caraetakervacationReducer from "./features/caretakerVacation";
import caretakercomplainReducer from "./features/Caretakercomment";
import expenseReducer from './features/expenses'
import userReducer from './features/userCrudSlice'
import summaryReducer from './features/summarySlice'
import messageReducer from "./features/messageSlice";
import admissionReducer from "./features/AdmissionSlice";
import boardingReducer from "./features/boarding";
import medicalReducer from "./features/medicalSlice";
import issuesReducer from "./features/issuesSlice";
import suppliesReducer from "./features/suppliesSlice";
import borrowReducer from "./features/Borrow";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    project:projectReducer,
    milestone:milestoneReducer,
    complain: complainReducer,
    vacation: vacationReducer,
    tenant:tenantReducer,
    notice:noticeReducer,
    expense:expenseReducer,
    caretakercomplain:caretakercomplainReducer,
    caretakervacation:caraetakervacationReducer,
    user:userReducer,
    summary:summaryReducer,
    message:messageReducer,
    admission:admissionReducer,
    boarding:boardingReducer,
    medical:medicalReducer,
    issues:issuesReducer,
    supplies:suppliesReducer,
    borrow:borrowReducer,

  },
});
