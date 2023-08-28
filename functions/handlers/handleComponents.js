const { readdirSync } = require("fs");

module.exports = (client) => {
    client.handleComponents = async () => {
        const componentFolders = readdirSync(`./components`);
        for (const folder of componentFolders) {
            const componentFiles = readdirSync(`./components/${folder}`)
                .filter((file) => file.endsWith(".js"));
            const { buttons, modals } = client;
            switch (folder) {
                case "buttons":
                    for (const file of componentFiles) {
                        const button = require(`../../components/${folder}/${file}`)
                        buttons.set(button.data.name, button);
                    }
                    break;
                case "modals":
                    for (const file of componentFiles) {
                        const modal = require(`../../components/${folder}/${file}`);
                        modals.set(modal.data.name, modal);
                    }
                    break;
                case "pandesal":
                    for (const file of componentFiles) {
                        const str = require(`../../components/${folder}/${file}`)
                        buttons.set(str.data.name, str);
                    }
                case "tickets":
                    for (const file of componentFiles) {
                        const ticket = require(`../../components/${folder}/${file}`)
                        buttons.set(ticket.data.name, ticket);
                    }
                    break;
                case "startpages":
                    for (const file of componentFiles) {
                        const str = require(`../../components/${folder}/${file}`)
                        buttons.set(str.data.name, str);
                    }
                    break;
                case "pandesalForm":
                    for (const file of componentFiles) {
                        const str = require(`../../components/${folder}/${file}`)
                        buttons.set(str.data.name, str);
                    }
                    break;
                default:
                    break;
            }
        }
    };
};