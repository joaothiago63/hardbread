export interface Proposal {
    id: string,    
    clientId: string,
    receiveDate: string,
    deadLine: string,
    service: Service,
    stateService: State,
    umbrella: boolean,
    globalValue: Number | null,
    sellType: string,
    source: Source,
    seller: Seller,
    observation: string | null,
    revisionId: string,
    unityAmbipar: UnityAmbipar,
    companyId: string,
    status: Status,
    description: string | null
}

export enum Service{

}

export enum State{
    
}

export enum Source{

}

export enum Seller{

}

export enum UnityAmbipar{

}

export enum Status{

}