# Factorio Blueprints Database

## Features

### Filtering

- mods
- game version
- game stage (early/mid/late-game) - maybe generated automatically based on a set of rules that would be provided for the user as well (for transparency reasons)
- beacons? - could be included as a late-game thing (same with modules?)

### Sorting

- page views
- downloads
- favorites
- popularity (taken into account would be page views, downloads and favorites)
- newly added

### Blueprint Page

- title
- headline
- description
- thumbnail (generated on the client via a popup modal using the viewer with some sort of square viewfinder to select the thumbnail) - maybe allow user uploads as well?
- blueprint statistics (can be extracted automatically from the blueprint string) - stuff like game version, mods used, blueprint name, blueprint icons, #of items used
- report button - site admins will see: the blueprint in question, nr of reports for it and a list of reasons from the users that have reported it

## Design

[InVision](
https://projects.invisionapp.com/share/PWS7F35KNTZ#/screens?browse)

## Tech stack

- Svelte (with Sapper) - framework like react/vue but lighter and faster
- ArangoDB - database that has built in support for search and is multi model (documents, graph, KV)
- GraphQL - not sure yet
- DigitalOcean - for hosting
- Cloudflare - for DNS and caching
- Backblaze B2 - for static files like images
- Cloudflare and Backblaze B2 are part of the "Bandwith Alliance" meaning you don't pay for the data transfer

## Cruddl Cheatsheet

[Reference](https://github.com/AEB-labs/cruddl/blob/master/docs/modelling.md)

### Object Types

@rootEntity

- main entity

@childEntity

- only used within a list type (ie items: [OrderItem])

@entityExtension

- object (ie paymentInfo: PaymentInfo)
- values can be omitted and they will not be overwritten

@valueObject

- like @entityExtension but atomic (omitted values will be set to null)

### Relations

@relation
@relation(inverseOf: "customer")

### References

@reference(keyField: "countryISOCode")

- cruddle 0.9 only
- will return the data in another @rootEntity using the key in the current @rootEntity

### References

@reference(keyField: "countryISOCode")

- cruddle 0.9 only
- will return the data in another @rootEntity using the key in the current @rootEntity

### Calculated fields

@traversal(path: "orders.items")

- follows a path and collects all objects on the way

@aggregation(path: "items.quantity", aggregator: SUM)

- same as @traversal but applies a fn to the collected objects
- aggregators:
    - COUNT - supported on all kinds of types (object types and scalars)
    - MIN, MAX - supported on Int, Float, DateTime, LocalDate and LocalTime
    - AVERAGE, SUM - supported only on Int and Float

### Indices

@unique
@index
