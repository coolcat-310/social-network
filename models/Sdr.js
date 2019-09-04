const mongoose = require('mongoose');

/**
 * sdr also known by Supplier_Deviation_Request
 */
const sdrSchema = mongoose.Schema({
    sdr_number:{
        type: String
    },
    part_number:{
        type: String
    },
    date:{
        type: Date
    },
    purchase_order: {
        type: String
    },
    quantity_affected:{
        type: Number
    },
    purchase_order_quantity: {
        type: Number
    },
    describe_deviation_request:{
        type: String
    },
    has_meet_requirement:{
        type: Boolean,
        default: false
    },
    has_taken_corrective_action:{
        type: Boolean,
        default: false
    },
    supplier:{
        type: String,
        enum: ['3m', 'a & b aerospace', 'a l industries inc', 'a q die casting/electro adapter inc', 'a z industries inc',
        'a-1 foam & fabrics', 'abc certified welding inc', 'accellent inc', 'accratronics seals corp', 'accurate dial & nameplate inc',
        'accurate screw machine corp', 'acorn industries inc', 'adept fasteners inc', 'adsorbents & desiccants corp of america',
        'advanced micro instruments inc', 'advanced technology co', 'aerial machine & tool corp', 'aeroflite enterprises inc',
        'air accessories co', 'air components inc', 'air electro inc', 'aircraft & commercial enterprises', 'airgas west',
        'alamo planting', 'aleph', 'all metals processing of orange county inc', 'all new stamping co', 'all seals inc',
        'all spec industries', 'all time', 'all time machine inc', 'allegheny rodney strip', 'allied electronics inc',
        'alloy die casting co', 'alx', 'am safe inc', 'ambrit engineering corp', 'ameriflex', 'amphenol aerospace corp',
        'anodyne inc', 'apple rubber products inc', 'aranda tooling inc', 'argo spring mfg co', 'arrow screw products inc',
        'arrowhead industrial services inc', 'artistic plastics inc', 'associated spring/raymond', 'ast bearings', 'ati allegheny ludlum corp',
        'atlas onClickUpdateSelectSong laboratories inc', 'automation plating corp', 'avnet electronics marketing', 'azusa pipe & tube bending corp',
        'b&j tool & die co inc', 'bal tec division', 'bally ribbon mills', 'beams industries', 'bearing engineers inc',
        'bearings & drives, inc', 'belleville wire cloth inc', 'belt tech products inc', 'beonca machine inc', 'berlin packaging llc',
        'bete fog nozzle inc', 'bi technologies corp', 'billion technology ltd', 'bisco industries inc', 'black oxide ind inc',
        'blanda', 'boatman marking', 'bob martin co', 'bodycote', 'bowman planting co inc', 'btc electronic components inc',
        'cableco', 'cal disc grinding co inc', 'cali foam products inc', 'california amforge corp', 'california machine specialties',
        'california swaging & cable products co', 'caplugs/protective closures co', 'capstan california', 'caran precision eng & mfg corp',
        'carousel custom floors', 'carter plating inc', 'castor engineering inc', 'catalina cylinders aluminum products',
        'catalina cylinders cliff impact div', 'cdw computer centers inc', 'central california fst', 'century rubber co inc',
        'century spring corp', 'cepa operations inc', 'ceramtec n a', 'cervantes development inc', 'conquest seal corp',
        'consolidated foundries inc', 'control cables inc', 'cook induction heating co inc', 'coorstek tetrafluor',
        'corland co', 'cpp azusa', 'cpp cudahy', 'cpp port hueneme', 'cpp rancho', 'curtiss wright', 'cutting edge systems',
        'dag engineering inc', 'danco', 'davis aircraft products co inc', 'delafield corp', 'diamond ground products',
            'dicronite dry lube', 'dimic steel tech inc', 'diversified ind products corp', 'dnb engineering inc',
            'dukes aerospace inc', 'dunkel bros machinery moving', 'dupontfluoro products', 'durkee onClickUpdateSelectSong labs inc',
            'dynamic fabrication', 'e/m corp', 'eagle picher technologies llc', 'earle m jorgensen co', 'eaton corporation',
            'eb welding', 'electro adapter inc', 'electrolurgy inc', 'electron beam industries inc', 'ellison machinery company',
            'ellsworth adhesives', 'embee inc', 'enco mfg co', 'engineering materials', 'epoxy pax inc', 'ernest packaging solutions',
            'estco entrerprises inc', 'executive instruments inc', 'exova ocm', 'extrude hone abrasive flow machine',
            'farrell & associates', 'fisher scientific', 'fivestar rubber stamp etc inc', 'flabeg technical glass us corp',
            'fralock', 'fry steel co', 'gasket mfg company', 'gear manufacturing inc', 'general metal finishing inc',
            'general onClickUpdateSelectSong & inspection', 'genesis filtration inc', 'gentec mfg inc', 'george b woodcock', 'gh package & product onClickUpdateSelectSong and consulting of az inc',
            'giessen tool and lathe inc', 'glenair inc', 'global hi-tek precision ltd', 'golden west lubricants inc', 'grainger',
            'greif inc', 'gsc foundries inc', 'gst industries inc', 'h3r aviation inc', 'halon banking systemss', 'hdtv electronic assembly',
            'helium leak onClickUpdateSelectSong inc', 'hemphill spring company', 'hermetic seal corp', 'hi tech investment castings ltd',
            'hill bros chemical co', 'hixson metal finishing', 'homer r dulin co', 'hoosier plastic fabrication inc', 'hudson technologies',
            'huffman engineering', 'hung tai metal mfg', 'hy speed machining inc', 'hydraulic specialists inc', 'hydro fitting mfg corp',
            'hydromach inc', 'impro industries', 'industrial metals', 'innovative engineering solutions', 'intertek plastics technology laboratories',
            'intertrade industries ltd', 'itt', 'jacon fasteners & electronics', 'jan kens enameling co',
            'jayco engineering inc', 'john chitillon & son', 'joslyn sunbank co llc', 'k & m precision machining inc',
            'k r anderson inc', 'kavlico corp depository account', 'kearflex engineering co inc', 'kinemotive corp',
            'kleen blast abrasives warehouse llc', 'komar apparel supply llc', 'konecranes inc', 'kovatch', 'kp engineering',
            'l & j engraving', 'lab safety supply', 'labelmaster', 'lake regional', 'lanzen fabricating inc', 'lee company',
            'lee spring co', 'lesjofors springs america inc', 'logistics environmental solutions', 'louis leven & son inc',
            'lowry computer products', 'lr technologies', 'lubeco inc', 'lubrication technology', 'lucas-milhaupt inc',
            'lyco machining inc', 'magparts', 'maintag', 'malbert & mitchell grinding corp', 'marking methods inc',
            'maroney co', 'mars', 'martinson nicholls inc', 'master protection corp (firemaster)', 'mcmaster-carr supply company',
            'mdc aircraft service', 'mechanical metal finishing', 'meggitt north hollywood', 'meggitt safety systems inc',
            'menke marking devices inc', 'mesco', 'metal lite', 'metalite mfg co', 'microgroup inc', 'mil spec heat treating inc',
            'miller-stephenson chemical co inc', 'minster machine company', 'misc op suppliers', 'mono engineering',
            'moore wallace corp', 'moseys production machinists inc', 'mouser electronics inc', 'mpm products', 'msc industrial supply co',
            'mulgrew aircraft components inc', 'national instruments', 'national tecnnical systems', 'naugatuck glass co',
            'nedco electronics', 'nelson aerospace inc', 'nelson nameplate co', 'newark electronics', 'noll', 'norman filter co llc',
            'norris cylinder', 'numatic engineering', 'nycote labs', 'ocean state stainless inc', 'ocm exova', 'omega engineering inc',
            'on line graphics & finishing inc', 'one-way mfg inc', 'opti mfg corp', 'orange coast onClickUpdateSelectSong inc', 'orscheln products llc',
            'pacific forge inc', 'pacific metals group', 'pacific pistons', 'pacific scientific (artus vietnam)', 'pacific scientific (ekd)',
            'pacific scientific (emc)',  'pacific scientific (oeco)',  'pacific scientific - miami product support',
            'pacific scientific atg ltd',  'pacific scientific emc ca inc', 'packaging plus llc', 'passive components inc',
            'pby plastics inc','pcc structurals inc', 'percival aviation', 'performance polymer tech', 'philip environmental',
            'pioneer broach co inc', 'plasidyne eng & mfg inc', 'port plastics inc', 'prc desoto intl asc-la', 'precipart corp',
            'precision coil spring co', 'precision molds & molding co', 'precision resource', 'precision shapes inc', 'prime alloy castings co',
            'product/techniques inc', 'professional plastics inc', 'protech design & mfg', 'protocast john list corp',
            'qed inc', 'qual-pro', 'r & r rubber molding inc', 'r s hughes co inc', 'ram company', 'research metal industries inc',
            'rgf enterprises inc', 'rm electric', 'robinsons', 'rocker industries', 'roncelli plastics inc', 'ross name plate co',
            'rubbercraft corporation', 'rutland tool & supply co inc', 'ryan-herco', 's & c plastic coating llc', 's & d industrial tool supply inc',
            'samuel son & co inc', 'sandvik materials technology', 'santos precision inc', 'sava industries inc', 'scougal rubber corp',
            'sealed air corporation', 'seaman corporation', 'security sewing machine co', 'senior flexonics', 'sensata',
            'sensata technologies inc', 'serra manufacturing corp', 'service planting co inc', 'sheffield mfg inc',
            'sigma cast and machine inc', 'sigma-netics inc', 'southern cal tooling house inc', 'stabile plating co inc',
            'staples business advantage', 'steico industries inc', 'structural composites industries llc', 'summit corp of america',
            'sunbank', 'superior metal shapes inc', 'supperior mold company', 'superior spring co', 'supreme machine products inc',
            'systemated business prods', 't & s die cutting', 'ta manufacturing', 'tamshell corp', 'tavco inc', 'tci precision',
            'tct advanced machining inc', 'teb inc', 'techno coatings inc', 'tek gutthrie pte ltd', 'onClickUpdateSelectSong', 'thermal vac technology',
            'thermocoax inc', 'thompson gundrilling inc', 'thunderbolt mfg ing', 'tinius olsen onClickUpdateSelectSong mach co', 'titan spring',
            'tnt plastic molding inc', 'tool steel services', 'trans fx inc', 'trellborg sealing solutions west', 'trio metal stamping inc',
            'tt electronics', 'tube service co', 'tyco electronics corp', 'u in tech co ltd', 'uemc inc', 'uemz@', 'uline inc',
            'united products & supply co', 'united refrigeration inc', 'united rentals northwest inc', 'universal alloy corp',
            'universal metals co', 'upland fab inc', 'usa weighting systems inc', 'vacco industries', 'valcor engineering',
            'valley metal treating inc', 'valley seal co inc', 'vescio threading co', 'voss industries inc', 'vwr scientific products',
            'w machine works inc', 'wah chang', 'wassco', 'wb parts inc', 'wesco', 'west coast gasket co', 'west coast metal stamping inc',
            'western states wire & cable inc', 'westfield hydraulics inc', 'worldwide manufacturing', 'worthington cylinder (tilbury)',
            'wrico stamping co of az', 'other'

        ]
    },
    submit_by:{
        type: String
    },
    title:{
        type: String
    },
    meggitt_company_disposition: {
        type: String
    },
    pacsci_quality:{
        type: Number
    },
    pacsci_purchasing:{
        type: String
    },
    pacsci_engineering:{
        type: String
    },
    pacsci_manufacturing_engineering:{
        type: String
    },
    pacsci_isApproved:{
        type: Boolean,
        default: false
    },
    pacsci_misc_issue_found:{
        type: String
    }
});

const Sdr = mongoose.model('Sdr', sdrSchema);

module.exports = Sdr;