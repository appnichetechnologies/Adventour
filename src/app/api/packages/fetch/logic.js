import { getXataClient } from "../../../../xata";

// Database Connection Pool
const connection = getXataClient()

async function fetch_package(data) {
    try {
        const id = data['id'];

        let packages = await connection.db.packages.select(
            [
                'Name',
                'Type',
                'StartDate',
                'EndDate',
                'Price',
                'Destination.*',
                'Accomodations.*',
                'Activity.*',
                'Description',
            ]
        ).getAll();

        packages = JSON.parse(packages);

        if (packages == undefined || packages == null) {
            return {
                'returncode': 400,
                'message': "Packages not Found.",
                'output': []
            }
        }

        for (let pkg in packages) {
            if (packages[pkg].id === id) {
                return {
                    'returncode': 200,
                    'message': 'Package Fetched',
                    'output': [packages[pkg]]
                }
            }
        }

        return {
            'returncode': 400,
            'message': 'Package Not Found',
            'output': []
        }

    }
    catch (error) {
        return {
            'returncode': 500,
            'message': error.message,
            'output': []
        }
    }
}

async function fetch_packages() {
    try {
        let packages = await connection.db.packages.select(
            [
                'Name',
                'Type',
                'StartDate',
                'EndDate',
                'Price',
                'Destination.*',
                'Accomodations.*',
                'Activity.*',
                'Description',
            ]
        )
            .getAll();

        return {
            'returncode': 200,
            'message': 'Packages Fetched',
            'output': packages
        };
    }
    catch (error) {
        return {
            'returncode': 500,
            'message': error.message,
            'output': []
        };
    }
}

export {
    fetch_package,
    fetch_packages
}
