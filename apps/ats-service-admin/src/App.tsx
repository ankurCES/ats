import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CandidateList } from "./candidate/CandidateList";
import { CandidateCreate } from "./candidate/CandidateCreate";
import { CandidateEdit } from "./candidate/CandidateEdit";
import { CandidateShow } from "./candidate/CandidateShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { RecruitmentStageList } from "./recruitmentStage/RecruitmentStageList";
import { RecruitmentStageCreate } from "./recruitmentStage/RecruitmentStageCreate";
import { RecruitmentStageEdit } from "./recruitmentStage/RecruitmentStageEdit";
import { RecruitmentStageShow } from "./recruitmentStage/RecruitmentStageShow";
import { JobPositionList } from "./jobPosition/JobPositionList";
import { JobPositionCreate } from "./jobPosition/JobPositionCreate";
import { JobPositionEdit } from "./jobPosition/JobPositionEdit";
import { JobPositionShow } from "./jobPosition/JobPositionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ATSService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Candidate"
          list={CandidateList}
          edit={CandidateEdit}
          create={CandidateCreate}
          show={CandidateShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="RecruitmentStage"
          list={RecruitmentStageList}
          edit={RecruitmentStageEdit}
          create={RecruitmentStageCreate}
          show={RecruitmentStageShow}
        />
        <Resource
          name="JobPosition"
          list={JobPositionList}
          edit={JobPositionEdit}
          create={JobPositionCreate}
          show={JobPositionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
