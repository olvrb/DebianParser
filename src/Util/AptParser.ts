export class AptParser {
    static ParseString(str: string) {
        const Packages = str.split("\n\n");
        const PackageObject: { packages: any[]; total: number } = {
            packages: [],
            total: 0
        };
        for (const _package of Packages) {
            PackageObject.total++;
            const PackageProperties = _package.split("\n");
            const pack = {};
            for (const prop of PackageProperties) {
                pack[prop.substr(0, prop.indexOf(":"))] = prop
                    .substr(prop.indexOf(":") + 1)
                    .trim();
            }
            // Remove occasional empty key.
            delete pack[""];
            PackageObject.packages.push(pack);
        }
        return PackageObject;
    }
}
/**
 * Package
 *     - Package
 *     - Version
 *     - Architecture
 *     - Depends
 *     - Filename
 *     - Size
 *     - MD5sum
 *     - SHA1
 *     - SHA256
 *     - Section
 *     - Description
 *     - Author
 *     - Depiction
 *     - Name
 */
