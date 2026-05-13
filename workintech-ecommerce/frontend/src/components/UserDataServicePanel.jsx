import { useState } from "react";
import {
  getUserSummary,
  getExternalProfile,
  saveExternalProfile,
  addUserActivity,
  getUserActivities,
} from "../api/helperUserDataApi";

export default function UserDataServicePanel() {
  const [userId, setUserId] = useState(1);
  const [summary, setSummary] = useState(null);
  const [profile, setProfile] = useState(null);
  const [activities, setActivities] = useState([]);

  const [profileForm, setProfileForm] = useState({
    birthDate: "2002-05-10",
    gender: "Male",
    city: "Bristol",
    interests: "Electronics, Gaming",
  });

  const [activityForm, setActivityForm] = useState({
    activityType: "LOGIN",
    description: "User logged in",
    ipAddress: "127.0.0.1",
    deviceInfo: "Chrome / Windows",
  });

  const loadSummary = async () => {
    const data = await getUserSummary(userId);
    setSummary(data);
  };

  const loadProfile = async () => {
    const data = await getExternalProfile(userId);
    setProfile(data);
  };

  const saveProfile = async () => {
    const data = await saveExternalProfile(userId, profileForm);
    setProfile(data);
  };

  const saveActivity = async () => {
    await addUserActivity(userId, activityForm);
    const data = await getUserActivities(userId);
    setActivities(data);
  };

  const loadActivities = async () => {
    const data = await getUserActivities(userId);
    setActivities(data);
  };

  return (
    <main style={{ padding: "24px", fontFamily: "Arial" }}>
      <h1>User Data Service Panel</h1>

      <section>
        <label>User ID: </label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
      </section>

      <hr />

      <section>
        <h2>Summary</h2>
        <button onClick={loadSummary}>Load Summary</button>
        <pre>{summary ? JSON.stringify(summary, null, 2) : "No summary loaded"}</pre>
      </section>

      <hr />

      <section>
        <h2>External Profile</h2>

        <input
          type="date"
          value={profileForm.birthDate}
          onChange={(e) =>
            setProfileForm({ ...profileForm, birthDate: e.target.value })
          }
        />

        <input
          placeholder="Gender"
          value={profileForm.gender}
          onChange={(e) =>
            setProfileForm({ ...profileForm, gender: e.target.value })
          }
        />

        <input
          placeholder="City"
          value={profileForm.city}
          onChange={(e) =>
            setProfileForm({ ...profileForm, city: e.target.value })
          }
        />

        <input
          placeholder="Interests"
          value={profileForm.interests}
          onChange={(e) =>
            setProfileForm({ ...profileForm, interests: e.target.value })
          }
        />

        <div>
          <button onClick={saveProfile}>Save Profile</button>
          <button onClick={loadProfile}>Load Profile</button>
        </div>

        <pre>{profile ? JSON.stringify(profile, null, 2) : "No profile loaded"}</pre>
      </section>

      <hr />

      <section>
        <h2>Activities</h2>

        <input
          placeholder="Activity Type"
          value={activityForm.activityType}
          onChange={(e) =>
            setActivityForm({ ...activityForm, activityType: e.target.value })
          }
        />

        <input
          placeholder="Description"
          value={activityForm.description}
          onChange={(e) =>
            setActivityForm({ ...activityForm, description: e.target.value })
          }
        />

        <input
          placeholder="IP Address"
          value={activityForm.ipAddress}
          onChange={(e) =>
            setActivityForm({ ...activityForm, ipAddress: e.target.value })
          }
        />

        <input
          placeholder="Device Info"
          value={activityForm.deviceInfo}
          onChange={(e) =>
            setActivityForm({ ...activityForm, deviceInfo: e.target.value })
          }
        />

        <div>
          <button onClick={saveActivity}>Add Activity</button>
          <button onClick={loadActivities}>Load Activities</button>
        </div>

        <pre>{JSON.stringify(activities, null, 2)}</pre>
      </section>
    </main>
  );
}