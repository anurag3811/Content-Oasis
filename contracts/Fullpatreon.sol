// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Main{                                          
    uint contract_number = 0;                           
    address me;
    struct contract1{                                   
        string name;
        address creator;
        address place;
        uint contract_number;
        string description;
    }
    contract1[] contracts;
    mapping(address => address) profiles;               // address of creator => address of created contract
    mapping(uint => uint) indexes;                      // index of contract in contracts array
    uint index = 0;

    constructor(){
        me = msg.sender;
    }

    function getcontracts()public view returns(contract1[] memory){
        return contracts;
    }

    function getprofiles(address _address)public view returns(address){
        return profiles[_address];
    }

    function createone(string memory _name,string memory _description, uint _l1, uint _l2, uint _l3)external{  // create contract 
        require(profiles[msg.sender]==address(0), "already created one contract");
        contract1 memory temp;
        temp.name = _name;
        temp.creator = msg.sender;
        contract_number =contract_number+ 1;
        temp.contract_number = contract_number;
        temp.description = _description;
        Patreon child = new Patreon(msg.sender,_l1, _l2, _l3,_name, _description,contract_number);
        address contract_address =address(child);
        temp.place = contract_address;
        contracts.push(temp);
        indexes[contract_number] = index;
        index = index + 1;
        profiles[msg.sender] = contract_address;
    }

    function deleteone(uint _contract_number) external{
        require(msg.sender == contracts[indexes[_contract_number]].creator || msg.sender == me, "deleter");  
        contracts[indexes[_contract_number]].description = "##should not be accessed##";                        
    }
}

contract Patreon {
    mapping(address => uint256) public level;       // a mapping that stores levels of each owner
    mapping(uint256 => uint256) public perlevel;    // a mapping to maintain number of people at a given level
    address public i_owner;
    uint[3] prices;
    string z = "removed"; 
    string[] pre1;                              // array of premium links

    string[] pre2;

    string[] pre3;

    mapping(string => uint256) public mappre1;   // mapping to store index of a link in premium links(pre1) array
    mapping(string => uint256) public mappre2;
    mapping(string => uint256) public mappre3;
    string name;
    string description;
    uint contract_number;


    constructor(address creator, uint ll1, uint ll2, uint ll3, string memory _name, string memory _description,uint _contract_number) {
        i_owner = creator;
        prices[0] = ll1;
        prices[1] = ll2;
        prices[2] = ll3;
        name = _name;
        description = _description;
        contract_number = _contract_number;
        pre1.push(z);                           // first element is set as "removed" 
        pre2.push(z);
        pre3.push(z);
    }

    function fund(uint curr, uint latest) public payable {
         require(msg.sender != i_owner, "owner cannot fund to inflate");                        
         if(curr == 0){                                         // User has not taken membership of any level and is now taking membership, it can be any level(1,2,3)
            perlevel[latest] = perlevel[latest]+1;
            level[msg.sender] = latest;
        }else if(curr == 1){                                    // User wants to upgrade his/her membership to either level 2 or 3 from level 1
            perlevel[1] = perlevel[1]-1;                        
            perlevel[latest] = perlevel[latest]+1;
            level[msg.sender] = latest;
        }else if(curr == 2){                                    // User wants to upgrade to level 3 from level 2
            perlevel[2] = perlevel[2]-1;
            perlevel[latest] = perlevel[latest]+1;
            level[msg.sender] = latest;
        }
    }


    
    modifier onlyOwner {
         require(msg.sender == i_owner);
        _;
    }

    function bal() public view returns(uint){                       // returns balance  
        return address(this).balance;
    }

    function getlevel(address addr) public view returns(uint){      // return level of any user
        return level[addr];
    }

    function getalpha() public view returns(uint){                  // no. of level 1 subs
        return perlevel[1];
    }

    function getbeta() public view returns(uint){                 
        return perlevel[2];
    }

    function getgamma() public view returns(uint){                  
        return perlevel[3];
    }
    
    function withdraw() public onlyOwner {                          // withdraw funds
         uint balance = bal();
         payable(i_owner).transfer(balance);
    }

    function getname() public view returns(string memory){                 
        return name;
    }

    function getdescription() public view returns(string memory){                  
        return description;
    }

    function getcontract_number() public view returns(uint){                  
        return contract_number;
    }

    function getprices() public view returns(uint[3] memory){                  
        return prices;
    }

    function addcontent(uint _level, string memory _link) public onlyOwner {
        if(_level == 1){
            require(mappre1[_link]==0, "cannot put same link twice");
            pre1.push(_link);
            mappre1[_link] = pre1.length - 1;
        }
        if(_level == 2){
            require(mappre2[_link]==0, "cannot put same link twice");
             pre2.push(_link);
            mappre2[_link] = pre2.length-1;
        }
        if(_level == 3){
            require(mappre3[_link]==0, "cannot put same link twice");
             pre3.push(_link);
            mappre3[_link] = pre3.length-1;
        }
    }

    function removecontent(uint _level, string memory _link) public onlyOwner {
        if(_level == 1){
            pre1[mappre1[_link]] = "removed";
        }
        if(_level == 2){
            pre2[mappre2[_link]] = "removed";
        }
        if(_level == 3){
            pre3[mappre3[_link]] = "removed";
        }
    }

    function getpre1() public view returns(string[] memory){
        require(level[msg.sender]>=1 || msg.sender == i_owner, "not owner or just non subscriber");
        return pre1;
    }
    function getpre2() public view returns(string[] memory){
        require(level[msg.sender]>=2 || msg.sender == i_owner, "not owner or just non subscriber");
        return pre2;
    }
    function getpre3() public view returns(string[] memory){
        require(level[msg.sender]==3 || msg.sender == i_owner, "not owner or just non subscriber");
        return pre3;
    }
}


// New dep:

// Main: 0xfD19CE4D695a3337A2E7966718538DDDD7C2703d Goerli by Account 1: 0xc31050b9f1e983fd7917ff110b6723c4d200491f
