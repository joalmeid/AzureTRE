
export class Workspace {
    id: string;
    properties: {
        workspace_id: string;
        display_name: string;
        description: string;
        app_id: string;
    }
    deployment: {
        status: string;
        message: string;
    }
}