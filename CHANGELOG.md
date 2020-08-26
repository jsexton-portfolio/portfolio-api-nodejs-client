# 0.4.1

- Removed api version header

# 0.4.0

- Updated API to comply with contact message service v0.6.0

# 0.3.0

- Contact client is now able to retrieve multiple contact messages
  - Includes pagination and other query parameters
- Contact client is now able to retrieve a specific contact message
- Portfolio client can now be configured with an authentication token
- Restructured request interface to be more fine grained
- Client configs are now wrapped to provide additional functionality off of configurations

# 0.2.0

- Added security client
  - Login functionality
  - Confirm account functionality
- Restructured client architecture. All clients now fall under a portfolio client.

# 0.1.2

- Fixed bug that incorrectly configured default api URL with extra trailing slash

# 0.1.1

- Added API for creating new portfolio contact messages.
