declare namespace App {
    interface Locals {
        seo: MetaProps;
    }

    interface MetaProps {
        title: string;
        description: string | null;
        site?: string | null;
        creator?: string | null;
    }
}
