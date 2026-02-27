import { team } from "@/data/teamData";
import Image from "next/image";

export default function AboutTeam() {
    const leadership = team.filter((member) => member.role === "Założyciel");
    const marketing = team.filter((member) => member.role === "Specjalista ds. Marketingu");
    const customerService = team.filter((member) => member.role === "Specjalista ds. Obsługi Klienta");
    return (
        <section className="w-full  p-16">
            <div className="mx-auto  px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Nasz zespół</h2>

                <div>
                    <h3 className="mb-6 text-lg font-medium">Zarząd</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {leadership.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-background size-40 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <Image className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm text-center">{member.name}</span>
                                <span className="text-muted-foreground block text-xs text-center">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Logistika</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {marketing.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-background size-40 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <Image className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>``
                                <span className="mt-2 block text-sm text-center">{member.name}</span>
                                <span className="text-muted-foreground block text-xs text-center">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Obsługa Klienta</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {customerService.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-background size-40 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <Image className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}