import { Ng2StateDeclaration } from "@uirouter/angular";
import { CadastroComponent } from "./views/cadastro.component";




export const CadastroState: Ng2StateDeclaration = {
    name: 'cadastro',
    url: '/cadastro',
    component: CadastroComponent
};

export const STATES = [CadastroState]