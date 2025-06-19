export type SecurePasswdTp = Object & {
    id?: number,
    info: string,
    user: string,
    passwd: string
}

export type SecureStrTp = SecurePasswdTp[];