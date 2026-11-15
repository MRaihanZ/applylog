erDiagram
	sessions ||--|| users : references
	job_applications }o--|| companies : references
	job_applications }o--|| users : references
	application_status_history }o--|| job_applications : references

	users {
		UUID id
		VARCHAR(255) email
		TEXT password
		VARCHAR(50) full_name
		VARCHAR(20) nickname
		VARCHAR(26) image
		TIMESTAMPTZ created_at
		TIMESTAMPTZ updated_at
	}

	companies {
		UUID id
		VARCHAR(255) name
		TEXT website
		VARCHAR(255) industry
		VARCHAR(255) location
		VARCHAR(26) image
		TIMESTAMPTZ created_at
		TIMESTAMPTZ updated_at
	}

	job_applications {
		UUID id
		UUID user_id
		UUID company_id
		VARCHAR(255) job_title
		EMPLOYMENT_TYPE employment_type
		VARCHAR(255) location
		TEXT job_url
		INTEGER salary_min
		INTEGER salary_max
		CHAR(3) currency
		APPLICATION_STATUSES status
		DATE applied_at
		DATE deadline
		TEXT description
		VARCHAR(26) cv
		VARCHAR(26) resume
		TIMESTAMPTZ created_at
		TIMESTAMPTZ updated_at
	}

	application_status_history {
		UUID id
		UUID application_id
		APPLICATION_STATUSES previous_status
		APPLICATION_STATUSES new_status
		TIMESTAMPTZ created_at
	}

	sessions {
		UUID id
		UUID user_id
		TEXT token
		TIMESTAMPTZ created_at
		TIMESTAMPTZ expires_at
		TIMESTAMPTZ last_used_at
	}