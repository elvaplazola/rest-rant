# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method |           Path           |                     Purpose                     |
| :----: | :----------------------: | :---------------------------------------------: |
|  GET   |            /             |                    Home page                    |
|  GET   |         /places          |                Places index page                |
|  POST  |         /places/         |                Create new place                 |
|  GET   |       /places/new        |       Form page for creating a new place        |
|  GET   |       /places/:id        |        Details about a particular place         |
|  PUT   |       /places/:id        |            Update a particular place            |
|  GET   |     /places/:id/edit     |     Form page for editing an existing place     |
| DELETE |       /places/:id        |            Delete a particular place            |
|  POST  |     /places/:id/rant     | Create a rant(comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant(comment) about a particular place |
|  GET   |            \*            | 404 page (matches any route not defined above)  |

|   Name    |   City   |   State   |  Cuisines   |   Pic   |
| :-------: | :------: | :-------: | :---------: | :-----: |
| 'Place 1' | 'City 1' | 'State 1' | 'Cuisine 1' | 'Pic 1' |
| 'Place 2' | 'City 2' | 'State 2' | 'Cuisine 2' | 'Pic 2' |
| 'Place 3' | 'City 3' | 'State 3' | 'Cuisine 3' | 'Pic 3' |
