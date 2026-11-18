# ApplyLog Database

| Table                        | Responsibility                      |
| ---------------------------- | ----------------------------------- |
| `users`                      | Registered user accounts            |
| `sessions`                   | Server-side authentication sessions |
| `companies`                  | Company information                 |
| `job_applications`           | Job application records             |
| `application_status_history` | Recruitment status history          |

## users

Stores registered user information.

| Column     | Type         | Description          |
| ---------- | ------------ | -------------------- |
| id         | UUID         | Primary key          |
| email      | VARCHAR(255) | Unique email         |
| password   | TEXT         | Hashed password      |
| full_name  | VARCHAR(50)  | User's name          |
| nickname ? | VARCHAR(20)  | User's name          |
| image ?    | VARCHAR(26)  | User's image profile |
| created_at | TIMESTAMPTZ  | Account creation     |
| updated_at | TIMESTAMPTZ  | Last modification    |

## sessions

database-backed sessions.

| Column              | Type        | Description                     |
| ------------------- | ----------- | ------------------------------- |
| id                  | UUID        | Primary key                     |
| user_id ?           | UUID        | Foreign key to users            |
| session_token_hash  | TEXT        | Hashed session token            |
| csrf_token_hash     | TEXT        | Hashed CSRF token               |
| created_at          | TIMESTAMPTZ | Session creation                |
| last_used_at        | TIMESTAMPTZ | Last qualifying activity        |
| expires_at          | TIMESTAMPTZ | Current idle session expiration |
| absolute_expires_at | TIMESTAMPTZ | Maximum session lifetime        |

## companies

Stores company information.

| Column     | Type         | Description       |
| ---------- | ------------ | ----------------- |
| id         | UUID         | Primary key       |
| name       | VARCHAR(255) | Company name      |
| website ?  | TEXT         | Company website   |
| industry ? | VARCHAR(255) | Industry          |
| location ? | VARCHAR(255) | Company location  |
| image ?    | VARCHAR(26)  | Company image     |
| created_at | TIMESTAMPTZ  | Creation date     |
| updated_at | TIMESTAMPTZ  | Modification date |

## job applications

Stores job applications.

| Column          | Type         | Description                    |
| --------------- | ------------ | ------------------------------ |
| id              | UUID         | Primary key                    |
| user_id         | UUID         | Application owner              |
| company_id      | UUID         | Associated company             |
| job_title       | VARCHAR(255) | Position                       |
| employment_type | ENUM         | Full-time, Part-time, Contract |
| location ?      | VARCHAR(255) | Job location                   |
| job_url ?       | TEXT         | Original job listing           |
| salary_min      | INT          | Minimum salary                 |
| salary_max      | INT          | Maximum salary                 |
| currency        | CHAR(3)      | Currency code                  |
| status          | ENUM         | Application status             |
| applied_at      | DATE         | Application date               |
| deadline        | DATE         | Application deadline           |
| description ?   | TEXT         | Job description                |
| cv ?            | TEXT         | cv file                        |
| resume ?        | TEXT         | resume file                    |
| created_at      | TIMESTAMPTZ  | Creation date                  |
| updated_at      | TIMESTAMPTZ  | Modification date              |

## application status history

Stores changes in recruitment status.

| Column          | Type        | Description         |
| --------------- | ----------- | ------------------- |
| id              | UUID        | Primary key         |
| application_id  | UUID        | Related application |
| previous_status | ENUM        | Previous status     |
| new_status      | ENUM        | New status          |
| created_at      | TIMESTAMPTZ | Change timestamp    |
